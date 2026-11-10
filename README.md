# Pomodoro Timer

A simple Pomodoro timer built with Django, HTML, CSS, and vanilla JavaScript. It
starts with a 25-minute focus session and changes to a 5-minute break when the
focus session ends. Start the break with **Start**. The timer also provides
Pause and Reset controls.

## Requirements

- Python 3.12 or newer
- Django 6.1.3
- A modern web browser with JavaScript enabled

## Run locally

From the repository root, create and activate a virtual environment, then
install Django:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install "Django==6.1.3"
```

On Windows PowerShell, activate the environment with:

```powershell
.\.venv\Scripts\Activate.ps1
```

Then start the Django development server:

```bash
cd pomodoro_timer
python manage.py migrate
python manage.py runserver
```

Open <http://127.0.0.1:8000/> in your browser. Use **Start** to begin or resume
the countdown, **Pause** to stop it temporarily, and **Reset** to return to a
fresh focus session.

The included Django settings are for local development, not production use.

## Project structure

- `pomodoro_timer/timer/templates/index.html` — timer page
- `pomodoro_timer/timer/static/timer/style.css` — page styling
- `pomodoro_timer/timer/static/timer/script.js` — countdown and button behavior
- `pomodoro_timer/timer/views.py` — Django view for the timer page
- `pomodoro_timer/pomodoro_timer/settings.py` — Django project configuration
