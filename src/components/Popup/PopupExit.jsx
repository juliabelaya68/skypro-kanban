
const PopupExit=()=>{
    return (
<div className="pop-exit" id="popExit">
<div className="pop-exit__container">
    <div className="pop-exit__block">
        <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
        </div>
        <htmlForm className="pop-exit__htmlForm" id="htmlFormExit" action="#">
            <div className="pop-exit__htmlForm-group">
                <button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
                <button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
            </div>
        </htmlForm>
    </div>
</div>
</div>
    );
};
export default PopupExit;