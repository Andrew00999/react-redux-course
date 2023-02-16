/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import ErrorMessage from '@components/ErrorMessage'

export const withErrorApi = View => {
    return props => {
        const [arrorApi, setErrorApi] = useState(false)

        return (
            <>
                {arrorApi
                    ? <ErrorMessage />
                    : (
                        <View
                            setErrorApi={setErrorApi}
                            {...props}
                        />
                    )
                }
            </>
        )
    }
}


