import dash_auth
import os
from textwrap import dedent

import config


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# This file provides an interface to the `plotly_auth` library
# You do not need to edit this file
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #


def auth(app):
    # Print info for debugging
    if 'DYNO' in os.environ:
        print(dedent('''
            DASH_APP_NAME: {DASH_APP_NAME}
            DASH_APP_PRIVACY: {DASH_APP_PRIVACY}
            PLOTLY_USERNAME: {PLOTLY_USERNAME}
            PLOTLY_DOMAIN: {PLOTLY_DOMAIN}
            PLOTLY_API_DOMAIN: {PLOTLY_API_DOMAIN}
            PLOTLY_DASH_DOMAIN: {PLOTLY_DASH_DOMAIN}
            PLOTLY_SSL_VERIFICATION: {PLOTLY_SSL_VERIFICATION}

            
        '''.format(
            DASH_APP_NAME=os.environ['DASH_APP_NAME'],
            DASH_APP_PRIVACY=config.DASH_APP_PRIVACY,
            PLOTLY_USERNAME=os.environ['PLOTLY_USERNAME'],
            PLOTLY_DOMAIN=os.environ['PLOTLY_DOMAIN'],
            PLOTLY_API_DOMAIN=os.environ['PLOTLY_API_DOMAIN'],
            PLOTLY_DASH_DOMAIN=config.PLOTLY_DASH_DOMAIN,
            PLOTLY_SSL_VERIFICATION=os.environ['PLOTLY_SSL_VERIFICATION']

        )))

    # Configure private or secret auth
    if config.DASH_APP_PRIVACY in ['private', 'secret']:
        if os.environ['PLOTLY_API_KEY'] == 'your-plotly-api-key':
            raise Exception(
                'Please enter your Plotly API key inside config.py '
                '(PLOTLY_API_KEY)')

        if os.environ['PLOTLY_USERNAME'] == 'your-plotly-username':
            raise Exception(
                'Please enter your Plotly username inside config.py '
                '(PLOTLY_USERNAME)')

        if os.environ['PLOTLY_DOMAIN'] == 'https://your-plotly-domain.com':
            raise Exception(
                'Please enter your Plotly domain inside config.py '
                '(PLOTLY_DOMAIN)')

        app_url = '{}/{}'.format(
            config.PLOTLY_DASH_DOMAIN,
            os.environ['DASH_APP_NAME']
        )

        return dash_auth.PlotlyAuth(
            app,
            os.environ['DASH_APP_NAME'],
            config.DASH_APP_PRIVACY,
            [app_url, 'http://localhost:8050', 'http://127.0.0.1:8050']
        )
    if config.REQUIRE_LOGIN:
        app_url = '{}/{}'.format(
            config.PLOTLY_DASH_DOMAIN,
            os.environ['DASH_APP_NAME']
        )

        return dash_auth.PlotlyAuth(
            app,
            os.environ['DASH_APP_NAME'],
            config.DASH_APP_PRIVACY,
            [app_url, 'http://localhost:8050', 'http://127.0.0.1:8050'])
