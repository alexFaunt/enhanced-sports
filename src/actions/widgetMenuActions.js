export const LIFT_WIDGET = 'LIFT_WIDGET'
export const MOVE_WIDGET = 'MOVE_WIDGET'
export const DROP_WIDGET = 'DROP_WIDGET'

export const liftWidget = (lifted, liftedOffset) => ({ type: LIFT_WIDGET, lifted, liftedOffset })
export const dropWidget = (type, position) => ({ type: DROP_WIDGET, widgetType: type, position })
export const moveWidget = (mousePosition) => ({ type: MOVE_WIDGET, mousePosition })
