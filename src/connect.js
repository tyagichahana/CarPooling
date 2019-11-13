import { Component, createElement } from 'react'
import Store from './reducer' // using createStore of redux

// hoc
function connectWithComponent(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: Store.getState(),
            }
            this.Store = null
            this.initSelector()
        }

        componentWillMount() {
            this.Store = Store.subscribe(() => {
                this.setState({
                    data: Store.getState(),
                })
            })
        }

        componentWillUnmount() {
            if (this.Store) this.Store()
        }

        initSelector() {
            this.selector = WrappedComponent
        }

        render() {
            const props = {
                ...this.state.data,
                ...this.props,
            }
            this.selector.shouldComponentUpdate = false
            return createElement(this.selector, props)
        }
    }
}

export default connectWithComponent
