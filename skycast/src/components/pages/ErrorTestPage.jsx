import Error from "../utils/Error";

function ErrorTestPage () {
    return (
        <div>
            <Error title="Error" message="This is an error message" onRetry={() => console.log("Retry")} />
        </div>
    )
}

export default ErrorTestPage;