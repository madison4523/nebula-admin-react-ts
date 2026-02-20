import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';
export const lazyLoad = (Component: any): React.ReactNode => {
    return (
        <Suspense
            fallback={
                <Spin
                    size="small"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
                />
            }
        >
            <Component />
        </Suspense>
    );
};
