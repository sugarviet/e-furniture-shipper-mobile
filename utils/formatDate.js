import dayjs from 'dayjs';

export function formatDate(isoDate) {
    return dayjs(isoDate).locale('en').format('MMM, DD YYYY');
}

export function formatDateTime(isoDate) {
    return dayjs(isoDate).locale('en').format('HH:mm - MMM, DD YYYY ');
}

export function formatDateWithType(isoDate, format) {
    return dayjs(isoDate).locale('en').format(format);
}

export function formatAddDate(isoDate) {
    return dayjs(isoDate).add(3, 'day').locale('en').format('MMM, DD YYYY');
}

export function formatTime(isoDate) {
    return dayjs(isoDate).locale('en').format('HH:mm');
}
