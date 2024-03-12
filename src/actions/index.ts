export interface ActionResult {
  success?: string[];
  error?: string[];
  value?: Record<string, any>;
  fields?: Record<string, FormDataEntryValue>;
}
