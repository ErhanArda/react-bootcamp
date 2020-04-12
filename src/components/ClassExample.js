import React from 'react'

class ClassExample extends React.Component {

    render() {
        // const title = this.props.title; destructing
        const { title } = this.props;

        return (
            <div>
                This is Class Example {title}
            </div>
        )
    }
}

export default ClassExample