import React from 'react'

import store from '../store'

function connect(mapStateToProps) {
    return function (WrappedComponent) {

        // container component ==> how things work

        class WrappedComponentContainer extends React.Component {
            constructor(props) {
                super()
                this.state = mapStateToProps(store.getState(), props)
            }
            componentDidMount() {
                this.unsubscribe = store.subscribe(() => {
                    let state = mapStateToProps(store.getState(), this.props)
                    this.setState({ ...state })
                })
            }
            componentDidUpdate(prevProps, prevState) {
                if (this.props !== prevProps) {
                    const state = mapStateToProps(store.getState(), this.props)
                    this.setState({ ...state })
                }
            }
            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                let state = this.state
                let props = this.props
                if (1 === 1) throw new TypeError("oops")
                return (
                    <div>
                        <WrappedComponent {...state} {...props} />
                    </div>
                )
            }
        }

        WrappedComponentContainer.displayName = `<Connect ${WrappedComponent.name}>`

        return WrappedComponentContainer;
    }
}



export { connect }