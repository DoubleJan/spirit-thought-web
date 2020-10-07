import MarkdownEditor from './MarkdownEditor';

export type ChangeHandler = (data: ChangeData) => void
export interface ChangeData {
  title: string
  content: string
}

export default MarkdownEditor;
