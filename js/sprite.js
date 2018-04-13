class Sprite
{

    constructor()
    {
        this._selector = undefined;
        this._classList = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9'];
    };

    createSprite(selector)
    {
        return this._selector = $(selector);
    }

    nextFrame()
    {
        let selector = $(this._selector);
        let presentClass = selector[0].classList[1];
        if (!presentClass) {
            selector.addClass(this._classList[0]);
        } else {
            this._classList.map(function(actualClass, i, classList){
                if (presentClass == actualClass){
                    selector.removeClass(presentClass);
                    if (i < 9)
                        selector.addClass(classList[i+1]);
                    else
                        selector.addClass(classList[1]);
                }
            });
        }
    }
}
