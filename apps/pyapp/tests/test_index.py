from pyapp import index


def test_index():
    assert index.hello() == "Hello pyapp"
