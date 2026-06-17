/* ==========================================================
   LIFEOS CONSTANTS
   ========================================================== */

/* ==========================================================
   STORAGE KEYS
   ========================================================== */

export const STORAGE_KEYS = {

    SETTINGS: "settings",

    USER: "user",

    TASKS: "tasks",

    HABITS: "habits",

    FINANCE: "finance",

    GOALS: "goals",

    JOURNAL: "journal",

    CALENDAR: "calendar",

    ACHIEVEMENTS: "achievements",

    ANALYTICS: "analytics"

};

/* ==========================================================
   TASK STATUS
   ========================================================== */

export const TASK_STATUS = {

    PENDING: "pending",

    IN_PROGRESS: "in_progress",

    COMPLETED: "completed",

    CANCELLED: "cancelled",

    ARCHIVED: "archived"

};

/* ==========================================================
   TASK PRIORITY
   ========================================================== */

export const TASK_PRIORITY = {

    LOW: "low",

    MEDIUM: "medium",

    HIGH: "high",

    URGENT: "urgent"

};

/* ==========================================================
   HABIT TYPE
   ========================================================== */

export const HABIT_TYPE = {

    BOOLEAN: "boolean",

    COUNT: "count",

    DURATION: "duration"

};

/* ==========================================================
   HABIT UNIT
   ========================================================== */

export const HABIT_UNIT = {

    TIMES: "times",

    MINUTES: "minutes",

    HOURS: "hours",

    PAGES: "pages",

    KILOMETERS: "kilometers"

};

/* ==========================================================
   GOAL STATUS
   ========================================================== */

export const GOAL_STATUS = {

    ACTIVE: "active",

    COMPLETED: "completed",

    PAUSED: "paused",

    CANCELLED: "cancelled"

};

/* ==========================================================
   FINANCE TYPE
   ========================================================== */

export const FINANCE_TYPE = {

    INCOME: "income",

    EXPENSE: "expense"

};

/* ==========================================================
   FINANCE CATEGORY
   ========================================================== */

export const FINANCE_CATEGORY = {

    SALARY: "salary",

    FREELANCE: "freelance",

    INVESTMENT: "investment",

    FOOD: "food",

    TRANSPORT: "transport",

    SHOPPING: "shopping",

    HEALTH: "health",

    EDUCATION: "education",

    ENTERTAINMENT: "entertainment",

    OTHER: "other"

};

/* ==========================================================
   THEME
   ========================================================== */

export const THEMES = {

    DARK: "dark",

    LIGHT: "light"

};

/* ==========================================================
   MODAL SIZE
   ========================================================== */

export const MODAL_SIZE = {

    SMALL: "sm",

    MEDIUM: "md",

    LARGE: "lg",

    XLARGE: "xl",

    FULL: "full"

};

/* ==========================================================
   TOAST TYPE
   ========================================================== */

export const TOAST_TYPE = {

    SUCCESS: "success",

    ERROR: "error",

    WARNING: "warning",

    INFO: "info"

};

/* ==========================================================
   CHART RANGE
   ========================================================== */

export const CHART_RANGE = {

    DAILY: "daily",

    WEEKLY: "weekly",

    MONTHLY: "monthly",

    YEARLY: "yearly"

};

/* ==========================================================
   EVENT BUS EVENTS
   ========================================================== */

export const EVENTS = {

    TASK_CREATED: "task:created",

    TASK_UPDATED: "task:updated",

    TASK_DELETED: "task:deleted",

    TASK_COMPLETED: "task:completed",

    HABIT_CREATED: "habit:created",

    HABIT_UPDATED: "habit:updated",

    HABIT_COMPLETED: "habit:completed",

    FINANCE_CREATED: "finance:created",

    FINANCE_UPDATED: "finance:updated",

    GOAL_CREATED: "goal:created",

    SETTINGS_UPDATED: "settings:updated",

    THEME_CHANGED: "theme:changed",

    STORAGE_CHANGED: "storage:changed"

};

/* ==========================================================
   DEFAULT USER
   ========================================================== */

export const DEFAULT_USER = {

    id: null,

    firstName: "",

    lastName: "",

    avatar: "",

    email: ""

};