export class ImageInfo {

    public readonly path: string;

    public constructor(path: string) {
        this.path = path;
    }

    public getImageType(): String {
        return this.path.substring(this.path.indexOf('.') + 1);
    }
}
