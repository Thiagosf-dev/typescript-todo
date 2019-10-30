import EventManager from './event-manager';
import BoxPostForm from './box-post-form';

export default class BoxPostList {

    public static boxId: string = 'box-post-list';
    public static EVENT_CLICK_HIDDEN_BOX_LIST: string = 'box-post-list-click-hidden';
    private buttonFormSelector: string = `#${BoxPostList.boxId}>button[type=button]`;

    constructor(
        private eventManager: EventManager
    ) {
        this.init();
    };

    private init(): void {
        const buttonList: any = document.querySelector(this.buttonFormSelector);

        buttonList.addEventListener('click', () => {
            this.hiddenBox();
            this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST);
        });

        this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM, () => {
            this.showBox();
        });
    };

    private hiddenBox(): void {
        const boxList: any = document.getElementById(BoxPostList.boxId);
        boxList.style.display = 'none';
    };

    private showBox(): void {
        const boxList: any = document.getElementById(BoxPostList.boxId);
        boxList.removeAttribute('style');
    };
};