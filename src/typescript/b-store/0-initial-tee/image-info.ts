export class ImageInfo {

    public path: string;

    public constructor(path: string) {
        this.path = path;
    }

    public getPath() {
        return this.path;
    }

    public getImageType(): String {
        return this.path.substring(this.path.indexOf('.') + 1);
    }
}
