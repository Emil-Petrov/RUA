const nav = () => {
    return (
        <div className="form-nav flex space-between">
            <div className="steps flex space-between">
                <div className="button active">1.Design</div>
                <div className="button">2.Behavior</div>
            </div>
            <div className="flex middle center">
                <div className="button">Form 1</div>
                <div className="button">Success</div>
            </div>
            <div className="flex right">
                <div>Back</div>
                <div>Forward</div>
                <div>Delete</div>
            </div>
        </div>
    )
}

export default nav;