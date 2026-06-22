/* ==========================================================
   LIFEOS TASK FORM
   ========================================================== */

export default function createTaskForm() {

    return `

        <form id="task-form">

            <div class="form-group">

                <label for="task-title">

                    Task Title

                </label>

                <input
                    id="task-title"
                    name="title"
                    type="text"
                    placeholder="Enter task title"
                    required
                />

            </div>

            <div class="form-group">

                <label for="task-description">

                    Description

                </label>

                <textarea
                    id="task-description"
                    name="description"
                    rows="4"
                    placeholder="Task description..."
                ></textarea>

            </div>

            <div class="form-row">

                <div class="form-group">

                    <label for="task-priority">

                        Priority

                    </label>

                    <select
                        id="task-priority"
                        name="priority"
                    >

                        <option value="low">

                            Low

                        </option>

                        <option value="medium" selected>

                            Medium

                        </option>

                        <option value="high">

                            High

                        </option>

                        <option value="urgent">

                            Urgent

                        </option>

                    </select>

                </div>

                <div class="form-group">

                    <label for="task-category">

                        Category

                    </label>

                    <input
                        id="task-category"
                        name="category"
                        type="text"
                        placeholder="Work"
                    />

                </div>

            </div>

            <div class="form-row">

                <div class="form-group">

                    <label for="task-due-date">

                        Due Date

                    </label>

                    <input
                        id="task-due-date"
                        name="dueDate"
                        type="date"
                    />

                </div>

                <div class="form-group">

                    <label for="task-estimated">

                        Estimated Minutes

                    </label>

                    <input
                        id="task-estimated"
                        name="estimatedMinutes"
                        type="number"
                        min="0"
                        value="30"
                    />

                </div>

            </div>

            <div class="form-group">

                <label for="task-color">

                    Color

                </label>

                <input
                    id="task-color"
                    name="color"
                    type="color"
                    value="#6366f1"
                />

            </div>

            <div class="form-actions">

                <button
                    type="submit"
                    class="btn btn--primary"
                >

                    Save Task

                </button>

            </div>

        </form>

    `;

}