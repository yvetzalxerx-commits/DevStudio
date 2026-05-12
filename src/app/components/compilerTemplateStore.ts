export interface SelectedTemplate {
  html: string;
  css: string;
  js: string;
}

let selectedTemplate: SelectedTemplate | null = null;

export function setSelectedTemplate(template: SelectedTemplate) {
  selectedTemplate = template;
}

export function getSelectedTemplate(): SelectedTemplate | null {
  return selectedTemplate;
}
