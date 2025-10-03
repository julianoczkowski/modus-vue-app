<template>
  <div class="button-demo">
    <div class="demo-header">
      <h1>Modus Button Component Demo</h1>
      <p>
        Explore all the variants, colors, sizes, and features of the Modus
        Button component. This page demonstrates both direct web component usage
        and Vue integration patterns.
      </p>
    </div>

    <!-- Button Variants -->
    <section class="demo-section">
      <h2>Button Variants</h2>
      <div class="button-grid">
        <div class="button-example">
          <h3>Filled (Default)</h3>
          <div class="button-row">
            <modus-wc-button color="primary">Primary</modus-wc-button>
            <modus-wc-button color="secondary">Secondary</modus-wc-button>
            <modus-wc-button color="tertiary">Tertiary</modus-wc-button>
            <modus-wc-button color="warning">Warning</modus-wc-button>
            <modus-wc-button color="danger">Danger</modus-wc-button>
          </div>
        </div>

        <div class="button-example">
          <h3>Outlined</h3>
          <div class="button-row">
            <modus-wc-button variant="outlined" color="primary"
              >Primary</modus-wc-button
            >
            <modus-wc-button variant="outlined" color="secondary"
              >Secondary</modus-wc-button
            >
            <modus-wc-button variant="outlined" color="tertiary"
              >Tertiary</modus-wc-button
            >
            <modus-wc-button variant="outlined" color="warning"
              >Warning</modus-wc-button
            >
            <modus-wc-button variant="outlined" color="danger"
              >Danger</modus-wc-button
            >
          </div>
        </div>

        <div class="button-example">
          <h3>Borderless</h3>
          <div class="button-row">
            <modus-wc-button variant="borderless" color="primary"
              >Primary</modus-wc-button
            >
            <modus-wc-button variant="borderless" color="secondary"
              >Secondary</modus-wc-button
            >
            <modus-wc-button variant="borderless" color="tertiary"
              >Tertiary</modus-wc-button
            >
            <modus-wc-button variant="borderless" color="warning"
              >Warning</modus-wc-button
            >
            <modus-wc-button variant="borderless" color="danger"
              >Danger</modus-wc-button
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Button Sizes -->
    <section class="demo-section">
      <h2>Button Sizes</h2>
      <div class="button-row align-items-end">
        <modus-wc-button size="xs" color="primary">Extra Small</modus-wc-button>
        <modus-wc-button size="sm" color="primary">Small</modus-wc-button>
        <modus-wc-button size="md" color="primary"
          >Medium (Default)</modus-wc-button
        >
        <modus-wc-button size="lg" color="primary">Large</modus-wc-button>
      </div>
    </section>

    <!-- Button Shapes -->
    <section class="demo-section">
      <h2>Button Shapes</h2>
      <div class="button-row">
        <modus-wc-button shape="rectangle" color="primary"
          >Rectangle (Default)</modus-wc-button
        >
        <modus-wc-button
          shape="square"
          color="primary"
          aria-label="Square button"
        >
          <i class="modus-icons">add</i>
        </modus-wc-button>
        <modus-wc-button
          shape="circle"
          color="primary"
          aria-label="Circle button"
        >
          <i class="modus-icons">close</i>
        </modus-wc-button>
      </div>
    </section>

    <!-- Buttons with Icons -->
    <section class="demo-section">
      <h2>Buttons with Icons</h2>
      <div class="button-grid">
        <div class="button-example">
          <h3>Icon + Text</h3>
          <div class="button-row">
            <modus-wc-button color="primary" @click="handleSave">
              <i class="modus-icons" style="margin-right: 8px">save_disk</i>
              Save
            </modus-wc-button>
            <modus-wc-button color="secondary" @click="handleDownload">
              <i class="modus-icons" style="margin-right: 8px">download</i>
              Download
            </modus-wc-button>
            <modus-wc-button color="tertiary" @click="handleUpload">
              <i class="modus-icons" style="margin-right: 8px">upload</i>
              Upload
            </modus-wc-button>
          </div>
        </div>

        <div class="button-example">
          <h3>Icon Only</h3>
          <div class="button-row">
            <modus-wc-button shape="circle" color="primary" aria-label="Edit">
              <i class="modus-icons">edit_combination</i>
            </modus-wc-button>
            <modus-wc-button shape="circle" color="danger" aria-label="Delete">
              <i class="modus-icons">delete</i>
            </modus-wc-button>
            <modus-wc-button
              shape="circle"
              color="secondary"
              aria-label="Settings"
            >
              <i class="modus-icons">settings</i>
            </modus-wc-button>
            <modus-wc-button
              shape="circle"
              color="tertiary"
              aria-label="Search"
            >
              <i class="modus-icons">search</i>
            </modus-wc-button>
          </div>
        </div>

        <div class="button-example">
          <h3>Text + Icon</h3>
          <div class="button-row">
            <modus-wc-button color="primary">
              Next
              <i class="modus-icons" style="margin-left: 8px">arrow_right</i>
            </modus-wc-button>
            <modus-wc-button color="secondary">
              Previous
              <i class="modus-icons" style="margin-left: 8px">arrow_left</i>
            </modus-wc-button>
            <modus-wc-button color="tertiary">
              External Link
              <i class="modus-icons" style="margin-left: 8px">launch</i>
            </modus-wc-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Button States -->
    <section class="demo-section">
      <h2>Button States</h2>
      <div class="button-grid">
        <div class="button-example">
          <h3>Disabled State</h3>
          <div class="button-row">
            <modus-wc-button color="primary" disabled
              >Disabled Primary</modus-wc-button
            >
            <modus-wc-button variant="outlined" color="secondary" disabled
              >Disabled Outlined</modus-wc-button
            >
            <modus-wc-button variant="borderless" color="tertiary" disabled
              >Disabled Borderless</modus-wc-button
            >
          </div>
        </div>

        <div class="button-example">
          <h3>Pressed State (Toggle)</h3>
          <div class="button-row">
            <modus-wc-button
              color="primary"
              :pressed="isPressed"
              @click="togglePressed"
              aria-label="Toggle button"
            >
              <i class="modus-icons" style="margin-right: 8px">
                {{ isPressed ? "visibility_on" : "visibility_off" }}
              </i>
              {{ isPressed ? "Visible" : "Hidden" }}
            </modus-wc-button>
          </div>
        </div>

        <div class="button-example">
          <h3>Full Width</h3>
          <div class="button-column">
            <modus-wc-button color="primary" full-width
              >Full Width Primary</modus-wc-button
            >
            <modus-wc-button variant="outlined" color="secondary" full-width
              >Full Width Outlined</modus-wc-button
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Form Integration -->
    <section class="demo-section">
      <h2>Form Integration</h2>
      <form @submit.prevent="handleFormSubmit" class="demo-form">
        <div class="form-group">
          <label for="demo-input">Sample Input:</label>
          <input
            id="demo-input"
            v-model="formData.name"
            type="text"
            placeholder="Enter your name"
            class="form-input"
          />
        </div>

        <div class="form-actions">
          <modus-wc-button type="submit" color="primary">
            <i class="modus-icons" style="margin-right: 8px">check</i>
            Submit
          </modus-wc-button>
          <modus-wc-button
            type="reset"
            variant="outlined"
            color="secondary"
            @click="resetForm"
          >
            <i class="modus-icons" style="margin-right: 8px">refresh</i>
            Reset
          </modus-wc-button>
          <modus-wc-button type="button" variant="borderless" color="tertiary">
            <i class="modus-icons" style="margin-right: 8px">cancel_circle</i>
            Cancel
          </modus-wc-button>
        </div>
      </form>
    </section>

    <!-- Interactive Demo -->
    <section class="demo-section">
      <h2>Interactive Button Builder</h2>
      <div class="interactive-demo">
        <div class="controls">
          <div class="control-group">
            <label>Variant:</label>
            <select v-model="builderConfig.variant" class="control-select">
              <option value="filled">Filled</option>
              <option value="outlined">Outlined</option>
              <option value="borderless">Borderless</option>
            </select>
          </div>

          <div class="control-group">
            <label>Color:</label>
            <select v-model="builderConfig.color" class="control-select">
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="tertiary">Tertiary</option>
              <option value="warning">Warning</option>
              <option value="danger">Danger</option>
            </select>
          </div>

          <div class="control-group">
            <label>Size:</label>
            <select v-model="builderConfig.size" class="control-select">
              <option value="xs">Extra Small</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div class="control-group">
            <label>Shape:</label>
            <select v-model="builderConfig.shape" class="control-select">
              <option value="rectangle">Rectangle</option>
              <option value="square">Square</option>
              <option value="circle">Circle</option>
            </select>
          </div>

          <div class="control-group">
            <label>
              <input
                type="checkbox"
                v-model="builderConfig.disabled"
                class="control-checkbox"
              />
              Disabled
            </label>
          </div>

          <div class="control-group">
            <label>
              <input
                type="checkbox"
                v-model="builderConfig.fullWidth"
                class="control-checkbox"
              />
              Full Width
            </label>
          </div>
        </div>

        <div class="preview">
          <h3>Preview:</h3>
          <div class="preview-area">
            <modus-wc-button
              :variant="builderConfig.variant"
              :color="builderConfig.color"
              :size="builderConfig.size"
              :shape="builderConfig.shape"
              :disabled="builderConfig.disabled"
              :full-width="builderConfig.fullWidth"
              @click="handleBuilderClick"
            >
              <i v-if="builderConfig.shape !== 'rectangle'" class="modus-icons"
                >star</i
              >
              <template v-else>
                <i class="modus-icons" style="margin-right: 8px">star</i>
                Custom Button
              </template>
            </modus-wc-button>
          </div>

          <div class="code-output">
            <h4>Generated Code:</h4>
            <pre><code>{{ generatedCode }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Handling Demo -->
    <section class="demo-section">
      <h2>Event Handling</h2>
      <div class="event-demo">
        <div class="event-buttons">
          <modus-wc-button color="primary" @click="logEvent('Primary clicked')">
            Click Me
          </modus-wc-button>
          <modus-wc-button color="secondary" @click="showAlert">
            Show Alert
          </modus-wc-button>
          <modus-wc-button color="tertiary" @click="incrementCounter">
            Counter: {{ clickCounter }}
          </modus-wc-button>
        </div>

        <div class="event-log">
          <h3>Event Log:</h3>
          <div class="log-container">
            <div
              v-for="(log, index) in eventLogs"
              :key="index"
              class="log-entry"
            >
              <span class="log-timestamp">{{ log.timestamp }}</span>
              <span class="log-message">{{ log.message }}</span>
            </div>
            <div v-if="eventLogs.length === 0" class="log-empty">
              Click buttons above to see events logged here...
            </div>
          </div>
          <modus-wc-button
            variant="borderless"
            color="secondary"
            @click="clearLogs"
            :disabled="eventLogs.length === 0"
          >
            <i class="modus-icons" style="margin-right: 8px">delete</i>
            Clear Logs
          </modus-wc-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Reactive state
const isPressed = ref(false);
const clickCounter = ref(0);
const eventLogs = ref<Array<{ timestamp: string; message: string }>>([]);

const formData = ref({
  name: "",
});

const builderConfig = ref({
  variant: "filled" as const,
  color: "primary" as const,
  size: "md" as const,
  shape: "rectangle" as const,
  disabled: false,
  fullWidth: false,
});

// Computed properties
const generatedCode = computed(() => {
  const attrs = [];

  if (builderConfig.value.variant !== "filled") {
    attrs.push(`variant="${builderConfig.value.variant}"`);
  }
  if (builderConfig.value.color !== "primary") {
    attrs.push(`color="${builderConfig.value.color}"`);
  }
  if (builderConfig.value.size !== "md") {
    attrs.push(`size="${builderConfig.value.size}"`);
  }
  if (builderConfig.value.shape !== "rectangle") {
    attrs.push(`shape="${builderConfig.value.shape}"`);
  }
  if (builderConfig.value.disabled) {
    attrs.push("disabled");
  }
  if (builderConfig.value.fullWidth) {
    attrs.push("full-width");
  }

  const attrString = attrs.length > 0 ? " " + attrs.join(" ") : "";
  const content =
    builderConfig.value.shape === "rectangle"
      ? '\n  <i class="modus-icons" style="margin-right: 8px">star</i>\n  Custom Button\n'
      : '\n  <i class="modus-icons">star</i>\n';

  return `<modus-wc-button${attrString}>${content}</modus-wc-button>`;
});

// Event handlers
const togglePressed = () => {
  isPressed.value = !isPressed.value;
  logEvent(`Button toggled: ${isPressed.value ? "pressed" : "unpressed"}`);
};

const handleSave = () => logEvent("Save button clicked");
const handleDownload = () => logEvent("Download button clicked");
const handleUpload = () => logEvent("Upload button clicked");

const handleFormSubmit = () => {
  logEvent(`Form submitted with name: "${formData.value.name}"`);
};

const resetForm = () => {
  formData.value.name = "";
  logEvent("Form reset");
};

const handleBuilderClick = () => {
  logEvent("Builder preview button clicked");
};

const showAlert = () => {
  alert("Hello from Modus Button!");
  logEvent("Alert shown");
};

const incrementCounter = () => {
  clickCounter.value++;
  logEvent(`Counter incremented to ${clickCounter.value}`);
};

const logEvent = (message: string) => {
  const timestamp = new Date().toLocaleTimeString();
  eventLogs.value.unshift({ timestamp, message });

  // Keep only last 10 logs
  if (eventLogs.value.length > 10) {
    eventLogs.value = eventLogs.value.slice(0, 10);
  }
};

const clearLogs = () => {
  eventLogs.value = [];
};
</script>

<style scoped>
.button-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;
}

.demo-header h1 {
  color: var(--modus-wc-color-primary);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.demo-header p {
  color: var(--modus-wc-color-base-content);
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.demo-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: var(--modus-wc-color-bg-2);
  border-radius: 8px;
  border: 1px solid var(--modus-wc-color-border);
}

.demo-section h2 {
  color: var(--modus-wc-color-primary);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.button-grid {
  display: grid;
  gap: 2rem;
}

.button-example h3 {
  color: var(--modus-wc-color-base-content);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.button-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.button-row.align-items-end {
  align-items: end;
}

.button-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-form {
  max-width: 500px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--modus-wc-color-base-content);
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--modus-wc-color-border);
  border-radius: 4px;
  background-color: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: var(--modus-wc-color-primary);
  box-shadow: 0 0 0 2px rgba(0, 119, 200, 0.2);
}

.form-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.interactive-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.control-group label {
  color: var(--modus-wc-color-base-content);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.control-select {
  padding: 0.5rem;
  border: 1px solid var(--modus-wc-color-border);
  border-radius: 4px;
  background-color: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
}

.control-checkbox {
  margin: 0;
}

.preview {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.preview h3 {
  color: var(--modus-wc-color-base-content);
  margin: 0;
}

.preview-area {
  padding: 2rem;
  border: 1px solid var(--modus-wc-color-border);
  border-radius: 4px;
  background-color: var(--modus-wc-color-base-page);
  text-align: center;
}

.code-output {
  margin-top: 1rem;
}

.code-output h4 {
  color: var(--modus-wc-color-base-content);
  margin-bottom: 0.5rem;
}

.code-output pre {
  background-color: var(--modus-wc-color-base-page);
  border: 1px solid var(--modus-wc-color-border);
  border-radius: 4px;
  padding: 1rem;
  overflow-x: auto;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.9rem;
  color: var(--modus-wc-color-base-content);
  margin: 0;
}

.event-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.event-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.event-log h3 {
  color: var(--modus-wc-color-base-content);
  margin-bottom: 1rem;
}

.log-container {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid var(--modus-wc-color-border);
  border-radius: 4px;
  padding: 1rem;
  background-color: var(--modus-wc-color-base-page);
  margin-bottom: 1rem;
}

.log-entry {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
  font-family: monospace;
  font-size: 0.9rem;
}

.log-timestamp {
  color: var(--modus-wc-color-secondary);
  min-width: 80px;
}

.log-message {
  color: var(--modus-wc-color-base-content);
}

.log-empty {
  color: var(--modus-wc-color-secondary);
  font-style: italic;
  text-align: center;
  padding: 2rem;
}

@media (max-width: 768px) {
  .interactive-demo,
  .event-demo {
    grid-template-columns: 1fr;
  }

  .button-row {
    flex-direction: column;
    align-items: stretch;
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>
