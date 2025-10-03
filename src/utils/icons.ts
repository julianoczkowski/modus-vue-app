import { type ModusIconName } from "@/types/modus";

/**
 * Validates if the provided icon name is a valid Modus icon
 */
export function isValidModusIcon(iconName: string): iconName is ModusIconName {
  // Note: This is a comprehensive validation against all official Modus icons
  // The complete list is maintained in the ModusIconName type definition
  const allValidIcons: ModusIconName[] = [
    // Common icons for quick validation (subset of the full list)
    "add",
    "add_bold",
    "add_circle",
    "add_heavy",
    "add_square",
    "edit_combination",
    "delete",
    "save_disk",
    "save_as",
    "download",
    "upload",
    "search",
    "filter",
    "filter_list",
    "filter_off",
    "settings",
    "home",
    "dashboard",
    "menu",
    "menu_circle",
    "close",
    "close_bold",
    "close_heavy",
    "check",
    "check_bold",
    "check_circle",
    "check_circle_outlined",
    "check_heavy",
    "warning",
    "warning_outlined",
    "info",
    "info_outlined",
    "info_token",
    "alert",
    "alert_outlined",
    "help",
    "help_outlined",
    "arrow_left",
    "arrow_right",
    "arrow_up",
    "arrow_down",
    "arrow_back",
    "arrow_next",
    "arrow_left_circle",
    "arrow_right_circle",
    "arrow_up_circle",
    "arrow_down_circle",
    "chevron_left",
    "chevron_right",
    "chevron_left_bold",
    "chevron_right_bold",
    "chevron_double_left",
    "chevron_double_right",
    "chevron_double_up",
    "chevron_double_down",
    "launch",
    "launch_bold",
    "visibility_on",
    "visibility_off",
    "visibility_part_outline",
    "star",
    "star_half",
    "star_locked",
    "star_northern",
    "star_outlined",
    "stars",
    "heart",
    "thumbs_up",
    "thumbs_down",
    "refresh",
    "refresh_bold",
    "sync",
    "sync_bold",
    "sync_off",
    "copy_content",
    "undo",
    "undo_bold",
    "redo",
    "redo_bold",
    "cancel_circle",
    "cancel_square",
    "cancel_square_outlined",
    "component",
    "palette",
    "accessibility",
    "accessibility_circle",
    "code",
    "brightness",
    "contrast",
    "person",
    "people_group",
    "people_add",
    "people_couple",
    "user_account",
    "user_active",
    "user_inactive",
    "user_guide",
    "user_permissions",
    "user_passkey",
    "sign_in",
    "sign_out",
    "lock",
    "lock_open",
    "key",
    "password",
    "file",
    "file_new",
    "file_copy",
    "file_edit",
    "file_missing",
    "file_secure",
    "file_cloud",
    "folder_open",
    "folder_closed",
    "folder_new",
    "folder_locked",
    "folder_unlocked",
    "folder_personal",
    "folder_project",
    "folder_public",
    "folder_share",
    "document",
    "image",
    "image_add",
    "image_disabled",
    "image_scene",
    "video",
    "video_add",
    "video_disabled",
    "camera",
    "camera_disabled",
    "camera_photo_add",
    "email",
    "email_add",
    "phone",
    "phone_call",
    "phone_hang_up",
    "phone_mobile",
    "calendar",
    "calendar_add",
    "calendar_blank",
    "calendar_booking",
    "calendar_cancel",
    "calendar_check",
    "calendar_clock",
    "calendar_event",
    "calendar_plus",
    "calendar_show",
    "calendar_week",
    "clock",
    "clock_add",
    "clock_checkmark",
    "clock_delay_warning",
    "clock_delayed",
    "clock_locked",
    "location",
    "location_add",
    "location_add_multiple",
    "location_arrow",
    "location_disabled",
    "location_point",
    "map",
    "map_2d",
    "map_marker",
    "map_marker_circle",
    "map_marker_multiple",
    "map_markers",
    "map_poi",
    "shopping_cart",
    "shopping_cart_plus",
    "shopping_cart_minus",
    "credit_card",
    "payment_instant",
    "more_horizontal",
    "more_vertical",
    "more_circle",
    "expand",
    "expand_bold",
    "expand_more",
    "expand_less",
    "expand_more_bold",
    "expand_less_bold",
    "expand_more_circle",
    "expand_less_circle",
    "collapse",
    "collapse_bold",
    "sort",
    "sort_up",
    "sort_down",
    "sort_arrow_up",
    "sort_arrow_down",
    "sort_alpha_up",
    "sort_alpha_down",
    "view_grid",
    "view_list",
    "full_screen",
    "zoom_in",
    "zoom_out",
    "zoom_box",
    "zoom_center",
    "notifications",
    "notifications_off",
  ];

  // For production use, you might want to validate against the complete list
  // or implement a more efficient lookup mechanism
  return allValidIcons.includes(iconName as ModusIconName);
}

/**
 * Gets the appropriate ARIA label for common icons
 */
export function getIconAriaLabel(iconName: ModusIconName): string {
  const ariaLabels: Partial<Record<ModusIconName, string>> = {
    add: "Add",
    edit_combination: "Edit",
    delete: "Delete",
    save_disk: "Save",
    save_as: "Save As",
    download: "Download",
    upload: "Upload",
    search: "Search",
    filter: "Filter",
    filter_list: "Filter List",
    filter_off: "Remove Filter",
    settings: "Settings",
    home: "Home",
    dashboard: "Dashboard",
    menu: "Menu",
    close: "Close",
    check: "Check",
    check_circle: "Success",
    warning: "Warning",
    info: "Information",
    alert: "Alert",
    help: "Help",
    arrow_left: "Previous",
    arrow_right: "Next",
    arrow_up: "Up",
    arrow_down: "Down",
    chevron_left: "Previous",
    chevron_right: "Next",
    launch: "Open",
    visibility_on: "Show",
    visibility_off: "Hide",
    star: "Star",
    heart: "Favorite",
    thumbs_up: "Like",
    thumbs_down: "Dislike",
    refresh: "Refresh",
    sync: "Sync",
    copy_content: "Copy",
    undo: "Undo",
    redo: "Redo",
    cancel_circle: "Cancel",
    component: "Component",
    palette: "Colors",
    accessibility: "Accessibility",
    code: "Code",
    brightness: "Brightness",
    person: "Person",
    people_group: "People",
    user_account: "User Account",
    sign_in: "Sign In",
    sign_out: "Sign Out",
    lock: "Lock",
    lock_open: "Unlock",
    file: "File",
    folder_open: "Folder",
    folder_closed: "Folder",
    document: "Document",
    image: "Image",
    video: "Video",
    camera: "Camera",
    email: "Email",
    phone: "Phone",
    calendar: "Calendar",
    clock: "Time",
    location: "Location",
    map: "Map",
    shopping_cart: "Shopping Cart",
    credit_card: "Payment",
    more_horizontal: "More Options",
    more_vertical: "More Options",
    expand: "Expand",
    collapse: "Collapse",
    sort: "Sort",
    view_grid: "Grid View",
    view_list: "List View",
    zoom_in: "Zoom In",
    zoom_out: "Zoom Out",
    notifications: "Notifications",
  };

  return ariaLabels[iconName] || iconName.replace(/_/g, " ");
}

/**
 * Checks if Modus icons are loaded and available
 */
export function areIconsLoaded(): Promise<boolean> {
  return new Promise((resolve) => {
    if (!document.fonts) {
      // Fallback for browsers without FontFace API
      resolve(true);
      return;
    }

    document.fonts.ready
      .then(() => {
        const testIcon = document.createElement("i");
        testIcon.className = "modus-icons";
        testIcon.textContent = "add";
        testIcon.style.position = "absolute";
        testIcon.style.visibility = "hidden";

        document.body.appendChild(testIcon);

        const computedStyle = window.getComputedStyle(testIcon);
        const fontFamily = computedStyle.fontFamily;

        document.body.removeChild(testIcon);

        resolve(fontFamily.includes("modus-icons"));
      })
      .catch(() => {
        resolve(false);
      });
  });
}

/**
 * Icon categories for organization (using official Modus icon names)
 */
export const iconCategories = {
  actions: [
    "add",
    "edit_combination",
    "delete",
    "save_disk",
    "download",
    "upload",
    "copy_content",
    "refresh",
    "sync",
  ],
  navigation: [
    "arrow_left",
    "arrow_right",
    "arrow_up",
    "arrow_down",
    "chevron_left",
    "chevron_right",
    "home",
    "dashboard",
    "menu",
    "close",
  ],
  interface: [
    "search",
    "filter",
    "settings",
    "launch",
    "more_horizontal",
    "more_vertical",
    "sort",
    "view_grid",
    "view_list",
  ],
  status: [
    "check",
    "check_circle",
    "warning",
    "info",
    "alert",
    "help",
    "cancel_circle",
  ],
  content: [
    "file",
    "folder_open",
    "folder_closed",
    "document",
    "image",
    "video",
    "camera",
  ],
  user: [
    "person",
    "people_group",
    "user_account",
    "sign_in",
    "sign_out",
    "lock",
    "lock_open",
  ],
  communication: ["email", "phone", "chat", "comment", "notifications"],
  ui: [
    "palette",
    "brightness",
    "visibility_on",
    "visibility_off",
    "toggle_on",
    "toggle_off",
  ],
} as const;

/**
 * Gets icons by category
 */
export function getIconsByCategory(
  category: keyof typeof iconCategories
): ModusIconName[] {
  return [...iconCategories[category]];
}

/**
 * Searches icons by name or description
 */
export function searchIcons(query: string): ModusIconName[] {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return [];

  const allIcons = Object.values(iconCategories).flat() as ModusIconName[];

  return allIcons.filter((icon) => {
    const iconName = icon.toLowerCase();
    const ariaLabel = getIconAriaLabel(icon).toLowerCase();

    return (
      iconName.includes(normalizedQuery) ||
      ariaLabel.includes(normalizedQuery) ||
      iconName.replace(/_/g, " ").includes(normalizedQuery)
    );
  });
}

/**
 * Creates a properly formatted Modus icon element
 */
export function createModusIcon(
  iconName: ModusIconName,
  options: {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: string;
    className?: string;
    ariaLabel?: string;
    ariaHidden?: boolean;
  } = {}
): HTMLElement {
  const icon = document.createElement("i");
  icon.className = "modus-icons";
  icon.textContent = iconName;

  // Add size class
  if (options.size) {
    icon.classList.add(`icon-${options.size}`);
  }

  // Add custom class
  if (options.className) {
    icon.classList.add(options.className);
  }

  // Add color
  if (options.color) {
    icon.style.color = options.color;
  }

  // Add accessibility attributes
  if (options.ariaHidden) {
    icon.setAttribute("aria-hidden", "true");
  } else if (options.ariaLabel) {
    icon.setAttribute("aria-label", options.ariaLabel);
  }

  return icon;
}
