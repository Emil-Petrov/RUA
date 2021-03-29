const nav = () => {
    return (
        <div className="flex space-between">
            <div className="flex left">
                <div>Design</div>
                <div>Behavior</div>
            </div>
            <div className="flex center">
                <div>Form 1</div>
                <div>Form 2</div>
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