from flask import Flask, render_template

app = Flask(__name__)
app.config["SITE_NAME"] = "FORD"
app.config["TEMPLATES_AUTO_RELOAD"] = True


@app.route('/')
def home_page():
    return render_template('home.html')


@app.route('/dashboard')
def dashboard_page():
    return render_template('dashboard.html')


@app.errorhandler(404)
def page_not_found(_error):
    """Branded 404 page instead of Flask's default traceback."""
    return render_template('404.html'), 404


@app.errorhandler(500)
def server_error(_error):
    """Graceful fallback when something unexpected breaks."""
    return render_template('404.html'), 500


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
