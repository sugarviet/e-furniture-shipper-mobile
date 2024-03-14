import compose from 'compose-function';
import withQueryClient from './withQueryClient';
import withAuthenticate from './withAuthenticate';

export const withProviders = compose(withQueryClient, withAuthenticate);