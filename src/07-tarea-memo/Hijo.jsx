import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary m-1"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
})