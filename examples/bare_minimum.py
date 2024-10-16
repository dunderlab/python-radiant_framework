from radiant.framework.server import RadiantAPI
from radiant.framework import html
from browser import document


app = RadiantAPI()


# ----------------------------------------------------------------------
@app.get('/')
def home():
    """"""
    app.welcome()

# ----------------------------------------------------------------------
@app.get('/test')
def test(one, two, **kwargs):
    """"""
    document.select_one('body') <= html.H1('Test Framework')
    document.select_one('body') <= str(one) +'|' +  str(two)
    document.select_one('body') <= str(kwargs)

# ----------------------------------------------------------------------
@app.post('/test')
def test(one, two, **kwargs):
    """"""
    return {'data': True,}



if __name__ == '__main__':
    app.run()
