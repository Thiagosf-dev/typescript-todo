import EventManager from "./event-manager";
import BoxPostList from './box-post-list';

export default class BoxPostForm {

    static boxId: string = 'box-post-form';
    static EVENT_CLICK_HIDDEN_BOX_FORM: string = 'box-post-form-click-hidden';
    private buttonListSelector: string = `#${BoxPostForm.boxId}>button[type=button]`;

    constructor(
        private eventManager: EventManager
    ) {
        this.init();
    };

    private init(): void {
        const buttonForm: any = document.querySelector(this.buttonListSelector);

        buttonForm.addEventListener('click', () => {
            this.hiddenBox();
            this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM);
        });

        this.eventManager.addListener(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST, () => {
            this.showBox();
        });
    };

    private hiddenBox(): void {
        const boxForm: any = document.getElementById(BoxPostForm.boxId);
        boxForm.style.display = 'none';
    };

    private showBox(): void {
        const boxForm: any = document.getElementById(BoxPostForm.boxId);
        boxForm.removeAttribute('style');
    };
};