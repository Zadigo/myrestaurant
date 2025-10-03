def upload_to(instance, name):
    return f'{instance.pk}/{name}'


def calculate_vat(price):
    value = float(price)
    return value * 1.2
