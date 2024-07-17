export class TodoItem {
    id!: number;
    contentText!: string;
    complete!: boolean;

    constructor(contentText: string) {
        this.id = new Date().getTime();
        this.contentText = contentText;
        this.complete = false;
    }
}