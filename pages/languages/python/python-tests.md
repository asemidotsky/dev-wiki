# Python Tests

[Tests good practices](https://docs.pytest.org/en/latest/explanation/goodpractices.html#test-discovery)

* Create vritual environment
* Activate it
* Run `pip install .` (similar to `python setup.py install`)
* Run `pip install -e .` (similar to `python setup.py develop`)

`python setup.py develop --user` instead of `sudo python setup.py develop`

## Tests run

Ubuntu:
```bash
sudo apt-get install python3-venv
python3 -m venv .venv
source .venv/bin/activate
pip install -U setuptools pip
pip install -r requirements.dev.txt
pytest --cov-report term --cov-report xml:test_results/backend_coverage.xml --junitxml=test_results/TEST-backend_results.xml --cov=app app/tests/
deactivate
```

Windows:
```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -U pip
pip install -r requirements.dev.txt
pytest --cov-report term --cov-report xml:test_results/backend_coverage.xml --junitxml=test_results/TEST-backend_results.xml --cov=app app/tests/
```