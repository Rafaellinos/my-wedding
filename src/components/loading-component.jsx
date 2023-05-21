import React, {Fragment} from "react";
import {BounceLoader} from "react-spinners";

import './style-components.css';


const LoadingComponent = ({loading}) => {
    return (
        <Fragment>
            <div className={loading? "loading-spinner" : ""}>
                <BounceLoader
                    color={"#79A6CA"}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </Fragment>
    )
}

export default LoadingComponent;