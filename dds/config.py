import os

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# This file needs to be filled out if you wish to set                     #
# DASH_APP_PRIVACY to 'private' or 'secret' .                             #
#                                                                         #
# Additionally,fill out this config if you wish to use PlotlyAuth in      #
# you dash app. Note that REQUIRE_LOGIN must be True to use PlotlyAuth    #
#                                                                         #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# If REQUIRE_LOGIN is set to true only users with a valid Plotly Enterprise
# account can access.
REQUIRE_LOGIN = False

# DASH_APP_PRIVACY can be 'public', 'secret', or 'private'.
# If 'public', then the log in screen is displayed but _anyone_ with a valid
#       Plotly Enterprise account can access the app. Your server administrator controls who has plotly
#       accounts: it may be limited to accounts that they provision individually or it may be anyone
#       with access to your companies LDAP account.
# If 'private', then a log in screen is displayed and only the app creator (that is, the user account that
#       corresponds to the credentials below) and individual users or groups that the app creator shares
#       the app with can log in. As the app creator, you can share the app manually with other named
#       user accounts or LDAP groups through https://<your-plotly-account>/organize.
# If 'secret', then the app permissions are the same as in `private`: only the creator and the users
#       or groups that the creator shares the app with can log in. This option also exposes an additional
#       "secret link" that allows you to view the app without any log in screen.
#      This allows you to share the app with other viewers that don't have Plotly Enterprise accounts.
DASH_APP_PRIVACY = 'public'

# Fill in with your Plotly On-Premise username
os.environ['PLOTLY_USERNAME'] = 'your-plotly-username'

# Fill in with your Plotly On-Premise API key
# See <your-plotly-server>/settings/api to generate a key
# If you have already created a key and saved it on your own machine
# (from the Plotly-Python library instructions at https://plot.ly/python/getting-started)
# then you can view that key in your ~/.plotly/.config file
# or inside a Python session with these commands:
# import plotly
# print(plotly.tools.get_config_file())
os.environ['PLOTLY_API_KEY'] = 'your-plotly-api-key'

# Fill in with your Plotly On-Premise domain
os.environ['PLOTLY_DOMAIN'] = os.getenv('PLOTLY_DOMAIN',
                                        'https://your-plotly-domain.com')

os.environ['PLOTLY_API_DOMAIN'] = os.getenv('PLOTLY_API_DOMAIN',
                                            os.environ['PLOTLY_DOMAIN'])
# Fill in with the domain of your Dash subdomain.
# This matches the domain of the Dash App Manager
PLOTLY_DASH_DOMAIN = 'https://your-dash-manager-plotly-domain.com'

# Keep as True if your SSL certificates are valid.
# If you are just trialing Plotly On-Premise with self signed certificates,
# then you can set this to False. Note that self-signed certificates are not
# safe for production.
os.environ['PLOTLY_SSL_VERIFICATION'] = 'True'
