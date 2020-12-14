<AuthenticationContext.Consumer>
    {user => (
        <LanguageContext.Consumer>
            {language => (
                <StatusContext.Consumer>
                    {status => (
                        ...
                    )}
                </StatusContext.Consumer>
            )}
        </LanguageContext.Consumer>
    )}
</AuthenticationContext.Consumer>