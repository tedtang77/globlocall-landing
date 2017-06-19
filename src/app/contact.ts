export class Contact {
    constructor(
        public company: string,
        public name: string,
        public email: string, // _replyto / email
        public message: string,
    ) {
        this._replyto = email;
    }
    public _replyto: string;
}
