declare module '@toast-ui/editor' {
  type PreviewStyle = 'vertical' | 'tab';
  type EditType = 'markdown' | 'wysiwyg';

  interface EditorEvents {
    change?: () => void;
  }

  interface EditorOptions {
    el: HTMLElement;
    initialValue?: string;
    previewStyle?: PreviewStyle;
    height?: string;
    initialEditType?: EditType;
    useCommandShortcut?: boolean;
    events?: EditorEvents;
  }

  export default class Editor {
    constructor(options: EditorOptions);
    getMarkdown(): string;
    setMarkdown(markdown: string): void;
    destroy(): void;
  }
}
