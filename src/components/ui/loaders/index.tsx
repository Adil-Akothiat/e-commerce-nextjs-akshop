export const MainLoader = ()=> {
    return (
        <div className="absolute top-1/2 left-1/2" style={{"transform":"translate(-50%, -50%)"}}>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
}

export const SecondaryLoader = () => {
    return (
        <span className="loading loading-ring loading-lg absolute left-1/2 top-1/2" style={{transform: "translate(-50%, -50%)"}}></span>
    );
}