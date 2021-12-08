/*
 * Bienvenida Messages
 *
 * This contains all the text for the Bienvenida container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Bienvenida';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Bienvenida container!',
  },
});
