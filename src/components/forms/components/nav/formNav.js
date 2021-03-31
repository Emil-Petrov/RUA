import { Button } from '../../../inputs';

const nav = () => {
    return (
        <div className="form-nav flex space-between">
            <div className="steps flex space-between">
                <Button active={true} text="1.Design" />
                <Button text="2.Behavior" />
            </div>
            <div className="flex form-actions middle center">
                <Button active={true} text="Form 1" />
                <Button text="Success" />
                <div className="flex history-nav space-between">
                    <Button icon="undo" text="Undo" />
                    <Button icon="redo" text="Redo" />
                </div>
            </div>
            <div className="flex center middle delete-element">
                <Button icon="trash" text="Delete Element" />
            </div>
        </div>
    )
}

export default nav;