# URL routing configuration: maps URL patterns to page classes
urls = [
    (r"^/$", "pages.home.Home"),
    (r"^/about$", "pages.about.About"),
    (r"^/contact$", "pages.contact.Contact"),
]
