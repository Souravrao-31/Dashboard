import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CardComponent from 'components/cards/CardComponent';

const useStyles = createUseStyles((theme) => ({
    itemTitle: {
        ...theme.typography.itemTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    itemValue: {
        color: theme.color.grayishBlue2
    }
}));

function UnresolvedTicketsComponent({ containerStyles }) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    function renderStat(title, value) {
        return (
            <Row horizontal='space-between' vertical='center'>
                <span className={classes.itemTitle}>{title}</span>
                <span className={[classes.itemTitle, classes.itemValue].join(' ')}>{value}</span>
            </Row>
        );
    }

    return (
        <CardComponent
            containerStyles={containerStyles}
            title='Unresolved tasks'
            link='View details'
            subtitle='Group:'
            subtitleTwo='Support'
            items={[
                renderStat('Waiting on Feature Request', 4),
                renderStat('Awaiting Customer Response', 10),
                renderStat('Awaiting Developer Fix', 15),
                renderStat('Pending', 21)
            ]}
        />
    );
}

export default UnresolvedTicketsComponent;
