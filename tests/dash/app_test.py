from .utils.app_wrapper import app_page_layout

def layout():
	"""this function need to be defined, it can return anything which can be assigned to a children property in dash"""
	return app_page_layout("Simplest app ever")

def callbacks(app):
	'''
	Place call backs here.
	'''