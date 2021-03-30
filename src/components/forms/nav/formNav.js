import redo from '../../../media/Icons/Top-Menu-Icons/Redo-icon.svg';
import undo from '../../../media/Icons/Top-Menu-Icons/Undo-icon.svg';
import trashCAN from '../../../media/Icons/Top-Menu-Icons/trash-Icon.svg';

const nav = () => {
    return (
        <div className="form-nav flex space-between">
            <div className="steps flex space-between">
                <div className="button active">1.Design</div>
                <div className="button">2.Behavior</div>
            </div>
            <div className="flex form-actions middle center">
                <div className="flex button active">Form 1</div>
                <div className="flex button">Success</div>
                <div className="flex history-nav space-between">
                    <div className="button">
                        <img src={undo} />
                        Undo
                    </div>
                    <div className="button">
                        <img src={redo} />
                        Redo
                    </div>
                </div>
            </div>
            <div className="flex center middle delete-element">
                <img src={trashCAN} />
                <div className="button">Delete Element</div>
            </div>
        </div>
    )
}

export default nav;