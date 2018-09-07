---
title : "Unicode"
date : "2018-09-06T02:12:39Z"
---


# unicode nomalization
## Canonical and Compatibility Equivalence
http://www.unicode.org/reports/tr15/#Canon_Compat_Equivalence

**Examples of Canonical Equivalence**

Subtype | Examples
------- | -----
Combining sequence	        | Ç	↔	C+◌̧
Ordering of combining marks	| q+◌̇+◌̣	↔	q+◌̣+◌̇
Hangul & conjoining jamo	| 가	↔	ᄀ +ᅡ
Singleton equivalence	    | Ω	↔	Ω

**Examples of Compatibility Equivalence**       

Subtype | Examples      
------- | -----     
Font variants               |	ℌ	→	H
Linebreaking differences    |	[NBSP]	→	[SPACE]
Positional variant forms    |	ﻉ	→	‌ع‌
Circled variants            | 	①	→	1
Width variants              | 	ｶ	→	カ
Rotated variants            | 	︷	→	{
Superscripts/subscripts     |	i⁹	→	i9
Squared characters          |	㌀	→	アパート
Fractions                   |	¼	→	1/4
Other                       |	ǆ	→	dž

## Normalization Forms

Form	|   Description
-- |  --
Normalization Form D (NFD)	    |Canonical Decomposition
Normalization Form C (NFC)	    |Canonical Decomposition,followed by Canonical Composition
Normalization Form KD (NFKD)	|Compatibility Decomposition
Normalization Form KC (NFKC)	|Compatibility Decomposition,followed by Canonical Composition

 
# unicode charater category
https://en.wikipedia.org/wiki/Unicode_character_property#General_Category
http://www.fileformat.info/info/unicode/category/index.htm

Code	Description
[Cc]	Other, Control
[Cf]	Other, Format
[Cn]	Other, Not Assigned (no characters in the file have this property)
[Co]	Other, Private Use
[Cs]	Other, Surrogate
[LC]	Letter, Cased
[Ll]	Letter, Lowercase
[Lm]	Letter, Modifier
[Lo]	Letter, Other
[Lt]	Letter, Titlecase
[Lu]	Letter, Uppercase
[Mc]	Mark, Spacing Combining
[Me]	Mark, Enclosing
[Mn]	Mark, Nonspacing
[Nd]	Number, Decimal Digit
[Nl]	Number, Letter
[No]	Number, Other
[Pc]	Punctuation, Connector
[Pd]	Punctuation, Dash
[Pe]	Punctuation, Close
[Pf]	Punctuation, Final quote (may behave like Ps or Pe depending on usage)
[Pi]	Punctuation, Initial quote (may behave like Ps or Pe depending on usage)
[Po]	Punctuation, Other
[Ps]	Punctuation, Open
[Sc]	Symbol, Currency
[Sk]	Symbol, Modifier
[Sm]	Symbol, Math
[So]	Symbol, Other
[Zl]	Separator, Line
[Zp]	Separator, Paragraph
[Zs]	Separator, Space

# python code

```python
import unicodedata
all_letters = string.ascii_letters + " .,;'"
n_letters = len(all_letters)
# Turn a Unicode string to plain ASCII, thanks to http://stackoverflow.com/a/518232/2809427
def unicodeToAscii(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn' and c in all_letters)

# show case
str = 'Abelló'
print([c for c in str])
print([c for c in unicodedata.normalize('NFD', str)])
print([c for c in unicodedata.normalize('NFD', str) if unicodedata.category(c)!= 'Mn'])
print([c for c in unicodedata.normalize('NFD', str) if unicodedata.category(c)!= 'Mn'  and c in all_letters])

# result 
['A', 'b', 'e', 'l', 'l', 'ó']
['A', 'b', 'e', 'l', 'l', 'o', '́']
['A', 'b', 'e', 'l', 'l', 'o']
['A', 'b', 'e', 'l', 'l', 'o']

```