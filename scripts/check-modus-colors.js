#!/usr/bin/env node

/**
 * Modus Color Linting Script
 *
 * This script checks for usage of non-Modus color patterns in Vue files,
 * CSS files, and TypeScript files to ensure design system consistency.
 *
 * It flags common Tailwind color patterns and suggests Modus alternatives.
 */

import fs from "fs";
import path from "path";
import { glob } from "glob";

// Common Tailwind color patterns to detect
const TAILWIND_COLOR_PATTERNS = [
  // Tailwind color classes
  /\b(red|blue|green|yellow|purple|pink|indigo|gray|slate|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-(\d{2,3}|50)\b/g,

  // Tailwind background colors
  /\bbg-(red|blue|green|yellow|purple|pink|indigo|gray|slate|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-(\d{2,3}|50)\b/g,

  // Tailwind text colors
  /\btext-(red|blue|green|yellow|purple|pink|indigo|gray|slate|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-(\d{2,3}|50)\b/g,

  // Tailwind border colors
  /\bborder-(red|blue|green|yellow|purple|pink|indigo|gray|slate|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-(\d{2,3}|50)\b/g,

  // CSS hex colors (Modus-specific hex values that should be flagged)
  /#(ff0000|00ff00|0000ff|ffff00|ff00ff|00ffff|ffffff|000000|fff|f1f1f6|cbcdd6|b7b9c3|171c1e|0063a3|1e8a44|da212c|fbad26)\b/gi,

  // CSS rgb/rgba colors (basic ones)
  /rgb\(\s*(255,\s*0,\s*0|0,\s*255,\s*0|0,\s*0,\s*255|255,\s*255,\s*0|255,\s*0,\s*255|0,\s*255,\s*255|255,\s*255,\s*255|0,\s*0,\s*0)\s*\)/gi,
];

// Modus CSS custom properties (for suggestions)
const MODUS_COLOR_SUGGESTIONS = {
  red: "var(--modus-wc-color-error)",
  green: "var(--modus-wc-color-success)",
  blue: "var(--modus-wc-color-primary)",
  info: "var(--modus-wc-color-info)",
  yellow: "var(--modus-wc-color-warning)",
  black: "var(--modus-wc-color-base-content)",
  white: "var(--modus-wc-color-base-page)",
  gray100: "var(--modus-wc-color-base-100)",
  gray200: "var(--modus-wc-color-base-200)",
  gray300: "var(--modus-wc-color-base-300)",
};

// Files to check
const FILE_PATTERNS = [
  "src/**/*.vue",
  "src/**/*.ts",
  "src/**/*.js",
  "src/**/*.css",
  "src/**/*.scss",
];

// Files to exclude
const EXCLUDE_PATTERNS = ["node_modules/**", "dist/**", "**/*.d.ts"];

async function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const violations = [];

  for (const pattern of TAILWIND_COLOR_PATTERNS) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const line = content.substring(0, match.index).split("\n").length;
      const column = match.index - content.lastIndexOf("\n", match.index - 1);

      // Get color suggestion
      const colorName = match[1] || extractColorFromHex(match[0]);
      const suggestion =
        MODUS_COLOR_SUGGESTIONS[colorName] || "var(--modus-wc-color-primary)";

      violations.push({
        file: filePath,
        line,
        column,
        match: match[0],
        suggestion,
        message: `Use Modus color variable instead of "${match[0]}". Consider: ${suggestion}`,
      });
    }

    // Reset regex lastIndex for next iteration
    pattern.lastIndex = 0;
  }

  return violations;
}

function extractColorFromHex(hex) {
  const colorMap = {
    // Basic colors
    "#ff0000": "red",
    "#00ff00": "green",
    "#0000ff": "blue",
    "#ffff00": "yellow",
    "#ffffff": "white",
    "#000000": "black",

    // Modus-specific hex values (these should be replaced with CSS variables)
    "#fff": "white", // Should use: var(--modus-wc-color-base-page)
    "#f1f1f6": "gray100", // Should use: var(--modus-wc-color-base-100)
    "#cbcdd6": "gray200", // Should use: var(--modus-wc-color-base-200)
    "#b7b9c3": "gray300", // Should use: var(--modus-wc-color-base-300)
    "#171c1e": "black", // Should use: var(--modus-wc-color-base-content)
    "#0063a3": "blue", // Should use: var(--modus-wc-color-info)
    "#0063a3": "blue", // Should use: var(--modus-wc-color-primary)
    "#1e8a44": "green", // Should use: var(--modus-wc-color-success)
    "#da212c": "red", // Should use: var(--modus-wc-color-error)
    "#fbad26": "yellow", // Should use: var(--modus-wc-color-warning)
  };
  return colorMap[hex.toLowerCase()] || "primary";
}

async function main() {
  console.log("🎨 Checking for non-Modus color usage...\n");

  let allViolations = [];

  try {
    // Get all files to check
    const files = await glob(FILE_PATTERNS, {
      ignore: EXCLUDE_PATTERNS,
      absolute: true,
    });

    // Check each file
    for (const file of files) {
      try {
        const violations = await checkFile(file);
        allViolations = allViolations.concat(violations);
      } catch (error) {
        console.warn(
          `⚠️  Warning: Could not check file ${file}: ${error.message}`
        );
      }
    }

    // Report results
    if (allViolations.length === 0) {
      console.log("✅ All files are using Modus color variables correctly!");
      process.exit(0);
    } else {
      console.log(`❌ Found ${allViolations.length} color violations:\n`);

      // Group violations by file
      const violationsByFile = allViolations.reduce((acc, violation) => {
        if (!acc[violation.file]) {
          acc[violation.file] = [];
        }
        acc[violation.file].push(violation);
        return acc;
      }, {});

      // Print violations
      for (const [file, violations] of Object.entries(violationsByFile)) {
        const relativePath = path.relative(process.cwd(), file);
        console.log(`📄 ${relativePath}:`);

        for (const violation of violations) {
          console.log(
            `  ${violation.line}:${violation.column} - ${violation.message}`
          );
        }
        console.log();
      }

      console.log("💡 Modus Color Reference:");
      console.log("  Use CSS variables instead of hex values:");
      console.log(
        "  Base Page: var(--modus-wc-color-base-page) instead of #fff"
      );
      console.log(
        "  Base 100: var(--modus-wc-color-base-100) instead of #f1f1f6"
      );
      console.log(
        "  Base 200: var(--modus-wc-color-base-200) instead of #cbcdd6"
      );
      console.log(
        "  Base 300: var(--modus-wc-color-base-300) instead of #b7b9c3"
      );
      console.log(
        "  Base Content: var(--modus-wc-color-base-content) instead of #171c1e"
      );
      console.log("  Info: var(--modus-wc-color-info) instead of #0063a3");
      console.log(
        "  Primary: var(--modus-wc-color-primary) instead of #0063a3"
      );
      console.log(
        "  Success: var(--modus-wc-color-success) instead of #1e8a44"
      );
      console.log("  Error: var(--modus-wc-color-error) instead of #da212c");
      console.log(
        "  Warning: var(--modus-wc-color-warning) instead of #fbad26"
      );
      console.log("  See: https://trimble-oss.github.io/modus-wc-2.0/main/");

      process.exit(1);
    }
  } catch (error) {
    console.error("💥 Error running color check:", error.message);
    process.exit(1);
  }
}

// Run the script
main();
