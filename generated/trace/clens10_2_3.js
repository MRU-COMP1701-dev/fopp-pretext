if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens10_2_3"] = {"code": "inventory = {'apples': 430, 'bananas': 312, 'oranges': 525, 'pears': 217}\ninventory['bananas'] = inventory['bananas'] + 200\n\nnumItems = len(inventory)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"inventory": ["REF", 1]}, "ordered_globals": ["inventory"], "stack_to_render": [], "heap": {"1": ["DICT", ["apples", 430], ["bananas", 312], ["oranges", 525], ["pears", 217]]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"inventory": ["REF", 1]}, "ordered_globals": ["inventory"], "stack_to_render": [], "heap": {"1": ["DICT", ["apples", 430], ["bananas", 512], ["oranges", 525], ["pears", 217]]}, "stdout": ""}, {"line": 4, "event": "return", "func_name": "<module>", "globals": {"inventory": ["REF", 1], "numItems": 4}, "ordered_globals": ["inventory", "numItems"], "stack_to_render": [], "heap": {"1": ["DICT", ["apples", 430], ["bananas", 512], ["oranges", 525], ["pears", 217]]}, "stdout": ""}]}