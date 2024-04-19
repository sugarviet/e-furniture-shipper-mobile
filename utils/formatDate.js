import dayjs from 'dayjs';

export function formatDate(isoDate) {
    return dayjs(isoDate).locale('en').format('MMM, DD YYYY');
}

export function formatDateTime(isoDate) {
    return dayjs(isoDate).locale('en').format('HH:mm - MMM, DD YYYY ');
}
