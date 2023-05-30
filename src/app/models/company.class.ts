export class Company {
    name: string;
    count: number;

    /**
     * Creates an instance of Company { name: string, count: number }.
     * @param name as string.
     * @param obj optional object.
     */
    constructor(name: string, obj?: any) {
        this.name = obj ? obj.name : name;
        this.count = obj ? obj.count : 0;
    }
}