function withLoading(component) {
    
    return function componentPlus({isLoading = false, name=""}) {
        if(isLoading) return <h3>{`${name} is loading...`}</h3>
        return component()
    }
}

export default withLoading