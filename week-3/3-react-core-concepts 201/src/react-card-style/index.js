


function withCard(WrappedComponent) {
    return (props) => {
        return (
            <div className="card">
                <div className="card-header">{props.title}</div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <tbody>
                            <WrappedComponent {...props} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export { withCard }