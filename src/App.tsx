import React from 'react';
import * as S from './App.styles';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';

function App() {
    return (
        <S.App>
            <AccessibleForwardIcon
                style={{ color: 'green', fontSize: '40px' }}
            />
            <h1>Alpha Tech App Frontend</h1>
        </S.App>
    );
}

export default App;
