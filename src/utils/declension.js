export function declension (_sMessage, _iCount, _aDeclension)
{
	_sMessage = _sMessage.replace('%d', _iCount);

	if (_iCount % 10 === 1 && _iCount % 100 !== 11)
	{
		_sMessage = _sMessage.replace('%s', _aDeclension[0]);
	}
	else if (_iCount % 10 >= 2 && _iCount % 10 <= 4 && (_iCount % 100 < 10 || _iCount % 100 >= 20))
	{
		_sMessage = _sMessage.replace('%s', _aDeclension[1]);
	}
	else
	{
		_sMessage = _sMessage.replace('%s', _aDeclension[2]);
	}

	return _sMessage;
};
